/**
 * @description 检查选区是否在链接中，即菜单是否应该 active
 * @author wangfupeng
 */

import Editor from '../../editor/index'

function isActive(editor: Editor): boolean {
    // 无选中样式
    // const $selectionELem = editor.selection.getSelectionContainerElem()
    // if (!$selectionELem?.length) {
    //     return false
    // }
    // if ($selectionELem.getNodeName() === 'A') {
    //     return true
    // } else {
    //     return false
    // }
    return false
}

export default isActive
