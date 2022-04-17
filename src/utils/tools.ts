// - 判断前后空格，添加span 元素
export function addTag(str: string) {
    const strArr = str.split(' ')
    let line = ''
    strArr.forEach((ele) => {
        const strUpper = ele.toUpperCase()

        if (strUpper.startsWith('HREF')) {
            line += ele + ' '
        } else if (
            strUpper[0].charCodeAt(0) >= 65 &&
            strUpper[0].charCodeAt(0) <= 90 
        ) {
            line += '<span class="skill-tag"> ' + ele + ' </span>'
        } else {
            line += ele + ' '
        }
    })
    return line
}
