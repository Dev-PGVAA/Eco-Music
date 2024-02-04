export const secToMin = (sec: number) => {
	var minutes: number = Math.floor(sec / 60)
	var seconds: number = sec % 60

	var finallySeconds: string = seconds.toString()
	if (seconds < 10) {
		finallySeconds = '0' + seconds
	}

	return minutes + ':' + finallySeconds
}
