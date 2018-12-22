class DragList extends Component {
    constructor() {
        super()

        this.refs = []

        this.pointerIsDown = false
        this.pointerPos = { x: 0, y: 0 }
        this.currentIndex = 0
        this.insertIndex = 0

        this.isDragging = false
        this.dragEl = null
        this.sourceEl = null
        this.insertEl = null

        this.pointerDown = (event, itemIndex) => {
            event.preventDefault()

            this.pointerIsDown = true
            this.pointerPos = this.getPointerPos(event)

            this.currentIndex = itemIndex
            this.sourceEl = this.refs[itemIndex]
        }

        this.pointerMove = (event) => {
            if (!this.pointerIsDown) return
            event.preventDefault()

            this.pointerPos = this.getPointerPos(event)
            
            if (this.isDragging) {
                let isFirst = true
                let closestDist = 1000 * 1000
                let insertRef = null
                let insertBefore = true

                this.refs.forEach((ref, index) => {
                    if (!ref) return

                    let rect = ref.getBoundingClientRect()
                    let midx = this.props.vertical ? rect.x + rect.width / 2: rect.x + rect.width
                    let midy = this.props.vertical ? rect.y + rect.height : rect.y + rect.height / 2
                    let dx = Math.abs(this.pointerPos.x - midx)
                    let dy = Math.abs(this.pointerPos.y - midy)
                    let dist = dx * dx + dy * dy

                    if (dist < closestDist) {
                        closestDist = dist
                        insertRef = ref
                        this.insertIndex = index + 1
                        insertBefore = false

                        if (isFirst) {
                            if ((this.props.vertical && this.pointerPos.y < (rect.y + rect.height / 2)) ||
                                (!this.props.vertical && this.pointerPos.x < (rect.x + rect.width / 2))) {
                                    insertBefore = true
                                    this.insertIndex--
                            }
                            isFirst = false
                        }
                    }
                })

                this.updateDragEl(this.pointerPos, insertRef, insertBefore)

            } else if (this.sourceEl) {
                let rect = this.sourceEl.getBoundingClientRect()
                if (this.pointerPos.x < rect.x || this.pointerPos.x > rect.x + rect.width ||
                    this.pointerPos.y < rect.y || this.pointerPos.y > rect.y + rect.height) {
                        this.isDragging = true
                        this.addDragEl()
                }
            }
        }

        this.pointerUp = (event) => {
            if (!this.pointerIsDown) return
            event.preventDefault()

            if (this.isDragging) {
                this.props.moveItem(this.currentIndex, this.insertIndex)
                this.isDragging = false
                this.delDragEl()
            } else {
                this.props.selectItem(this.currentIndex)
            }

            this.pointerIsDown = false
        }

        this.getPointerPos = (event) => {
            let pointer = event.touches ? event.touches[0] : event
            return {
                x: pointer.clientX,
                y: pointer.clientY
            }
        }

        this.addDragEl = () => {
            let rect = this.sourceEl.getBoundingClientRect()
            this.dragEl = document.createElement('div')
            this.dragEl.className = 'drag-el'
            this.dragEl.style.left = rect.left + 'px'
            this.dragEl.style.top = rect.top + 'px'
            this.dragEl.style.width = rect.width + 'px'
            this.dragEl.style.height = rect.height + 'px'
            document.body.appendChild(this.dragEl)

            this.insertEl = document.createElement('div')
            this.insertEl.className = 'insert-el'
            if (this.props.vertical) {
                this.insertEl.style.width = rect.width + 'px'
                this.insertEl.style.height = '2px'
            } else {
                this.insertEl.style.width = '2px'
                this.insertEl.style.height = rect.height + 'px'
            }
            document.body.appendChild(this.insertEl)

            this.sourceEl.className += ' drag-source'
        }

        this.updateDragEl = ({ x, y }, insertRef, insertBefore) => {
            if (!this.dragEl) return

            let rect = this.dragEl.getBoundingClientRect()
            x = x - rect.width / 2
            y = y - rect.height / 2
            this.dragEl.style.left = x + 'px'
            this.dragEl.style.top = y + 'px'

            let rect2 = insertRef.getBoundingClientRect()
            if (this.props.vertical) {
                if (insertBefore) this.insertEl.style.top = rect2.y - 3 + 'px'
                else this.insertEl.style.top = rect2.y + rect2.height + 1 + 'px'
                this.insertEl.style.left = rect2.x + 'px'
            } else {
                if (insertBefore) this.insertEl.style.left = rect2.x - 3 + 'px'
                else this.insertEl.style.left = rect2.x + rect2.width + 1 + 'px'
                this.insertEl.style.top = rect2.y + 'px'
            }
        }

        this.delDragEl = () => {
            if (!this.dragEl) return

            document.body.removeChild(this.dragEl)
            this.dragEl = null

            document.body.removeChild(this.insertEl)
            this.insertEl = null

            this.sourceEl.className = this.sourceEl.className.replace(' drag-source', '')
        }
    }

    componentDidMount() {
        document.addEventListener('mouseup', this.pointerUp)
        document.addEventListener('mousemove', this.pointerMove)

        document.addEventListener('touchend', this.pointerUp, { passive: false })
        document.addEventListener('touchcancel', this.pointerUp, { passive: false })
        document.addEventListener('touchmove', this.pointerMove, { passive: false })
    }

    componentWillUnmount() {
        document.removeEventListener('mouseup', this.pointerUp)
        document.removeEventListener('mousemove', this.pointerMove)

        document.removeEventListener('touchend', this.pointerUp)
        document.removeEventListener('touchcancel', this.pointerUp)
        document.removeEventListener('touchmove', this.pointerMove)
    }

    render({ items, renderItem, selectItem, before, after }) {
        let itemComponents = items.map(item => {
            return button({
                class: item.class,
                ref: node => this.refs[item.index] = node,
                onmousedown: event => this.pointerDown(event, item.index),
                ontouchstart: event => this.pointerDown(event, item.index),
                onclick: () => {
                    if (!this.isDragging) selectItem(item.index)
                }
            }, renderItem(item.index))
        })
        return buttonRow('wrap', [before, itemComponents, after])
    }
}