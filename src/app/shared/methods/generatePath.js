export function generatePath(currentPath, path) {
    let newPath = currentPath.slice().split('/');
    const pathArr = path.split('/');
    if (pathArr[0] === '..' || pathArr[0] === '.') {
        pathArr.forEach(pathItem => {
            switch (pathItem) {
                case '..':
                    if (newPath.length > 1) {
                        newPath.pop();
                    }
                    break;
                case '.':
                    break;
                default:
                    newPath.push(pathItem);
                    break;
            }
        });
        return newPath.join('/');
    } else {
        return path;
    }
}
