function getElementWidth(content, padding, border) {
    const contentNum = parseInt(content);
    const paddingNum = parseInt(padding);
    const borderNum = parseFloat(border);
    return contentNum + paddingNum * 2 + borderNum * 2;
}