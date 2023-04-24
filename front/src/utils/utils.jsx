export const formatResponse = data => {
    const formatedData = []
    data.map(item => {
        return item.lines.map(line => {
            formatedData.push({ ...line, file: item.file })
        })
    })
    return formatedData
}