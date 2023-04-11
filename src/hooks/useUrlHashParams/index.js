export const useUrlHashParams = (string) => {
    const hashParams = {}
    const r = /([^&;=]+)=?([^&;]*)/g
    const q = string.substring(1)
		let e
		while (e = r.exec(q)) {
			if (e[2]?.split('').length > 0) {
				hashParams[e[1]] = e[2].split(',')
				.filter(val => val !== "")
			}
		}
    return hashParams;
}