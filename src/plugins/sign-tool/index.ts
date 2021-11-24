import Editor from "../../editor";

export const WESingToolConfigs = [
  // 删除标记插件
  {
    intention(editor: Editor) {
      console.log('inittool', editor.$textContainerElem.elems[0])
      editor.$textContainerElem.elems[0].addEventListener('click', (e) => {
        const target = <any>e.target
        const btnName = target?.getAttribute('data-btn-name') || ''
        if (btnName === 'delete-button') {
          const selector = `.${target?.getAttribute('data-delete-id')}`
          const dom = document.querySelector(selector)
          console.log(selector, dom)
          dom && dom.remove()
        }
      })
    }
  }
]
