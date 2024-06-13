interface SnapFunctionOpts {
	pos: number
	size: number
	snapThreshold: number
	isRtl: boolean
	vertical: boolean
	pixelsToPercent: (px: number) => number
	percentToPixels: (percent: number) => number
}

export type SnapFunction = (opt: SnapFunctionOpts) => number | null

export const SNAP_NONE = () => null

export function toSnapFunction(snap: string): SnapFunction {
	if (snap.startsWith("repeat(")) {
		const repeatVal = snap.substring("repeat(".length, snap.length - 1)
		const isPercent = repeatVal.endsWith("%")
		const repeatNum = Number.parseFloat(repeatVal)

		if (isNaN(repeatNum)) return SNAP_NONE

		return ({ pos, size, snapThreshold, isRtl, vertical }) => {
			const snapIntervalPx = isPercent ? size * (repeatNum / 100) : repeatNum
			const snapPoint = Math.round((isRtl && !vertical ? size - pos : pos) / snapIntervalPx) * snapIntervalPx

			if (pos >= snapPoint - snapThreshold && pos <= snapPoint + snapThreshold) {
				return snapPoint
			}

			return pos
		}
	} else {
		const snapPoints = snap.split(" ")

		return ({ pos, size, snapThreshold, isRtl, vertical }) => {
			let newPos = pos
			let minDistance = Number.POSITIVE_INFINITY

			snapPoints.forEach(value => {
				let snapPoint: number

				if (value.endsWith("%")) {
					snapPoint = size * (Number.parseFloat(value) / 100)
				} else {
					snapPoint = Number.parseFloat(value)
				}

				if (isRtl && !vertical) {
					snapPoint = size - snapPoint
				}

				const distance = Math.abs(pos - snapPoint)

				if (distance <= snapThreshold && distance < minDistance) {
					newPos = snapPoint
					minDistance = distance
				}
			})

			return newPos
		}
	}
}
