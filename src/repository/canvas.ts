export class Painter {
    el: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    isDrawing: boolean
    state: {
        color: string
        lineWidth: number
    }

    // eslint-disable-next-line no-unused-vars
    onPointerDown: (event: PointerEvent) => void
    // eslint-disable-next-line no-unused-vars
    onPointerUp: (event: PointerEvent) => void
    // eslint-disable-next-line no-unused-vars
    onPointerMove: (event: PointerEvent) => void

    /**
     * @param {HTMLCanvasElement} el
     */
    constructor(el: HTMLCanvasElement) {
        this.el = el
        this.el.width = 128
        this.el.height = 128
        this.ctx = el.getContext('2d')!
        this.isDrawing = false
        this.state = {
            color: 'red',
            lineWidth: 5
        }
        this.onPointerDown = () => {
            this.isDrawing = true
            this.ctx.beginPath()
        }
        this.onPointerUp = () => {
            this.isDrawing = false
        }
        /**
         * @param {PointerEvent} event
         */
        this.onPointerMove = event => {
            if (this.isDrawing) {
                let x = event.offsetX
                let y = event.offsetY
                this.ctx.strokeStyle = this.state.color
                this.ctx.lineWidth = this.state.lineWidth
                this.ctx.lineJoin = 'round'
                this.ctx.lineCap = 'round'
                this.ctx.lineTo(x, y)
                this.ctx.stroke()
            }
        }
        this.clear()
        this.el.addEventListener('pointerdown', this.onPointerDown)
        this.el.addEventListener('pointerup', this.onPointerUp)
        this.el.addEventListener('pointermove', this.onPointerMove)
    }

    setColor(color: string) {
        this.state.color = color
    }

    setLineWidth(lineWidth: number) {
        this.state.lineWidth = lineWidth
    }

    destroy() {
        this.el.removeEventListener('pointerdown', this.onPointerDown)
        this.el.removeEventListener('pointerup', this.onPointerUp)
        this.el.removeEventListener('pointermove', this.onPointerMove)
    }

    toDataURL() {
        return this.el.toDataURL('image/jpeg', 1)
    }

    clear() {
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(0, 0, this.el.width, this.el.height)
    }

    /**
     * @param {string} base64
     */

    drawBase64(base64: string) {
        const img = new Image()
        img.src = base64
        img.onload = () => {
            this.ctx.drawImage(img, 0, 0)
        }
    }
}
