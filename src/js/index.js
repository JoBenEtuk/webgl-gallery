import Vertical from './vertical'
import Horizontal from './horizontal'

const demos = [Vertical, Horizontal]
const demo = document.body.getAttribute('data-id')

new demos[demo]()

document.documentElement.classList.remove('no-js')
document.documentElement.classList.add('js')

const images = document.querySelectorAll('img')
let imagesIndex = 0

Array.from(images).forEach((element) => {
	const image = new Image()

	image.src = element.src
	image.onload = (_) => {
		imagesIndex += 1

		if (imagesIndex === images.length) {
			document.documentElement.classList.remove('loading')
			document.documentElement.classList.add('loaded')
		}
	}
})
