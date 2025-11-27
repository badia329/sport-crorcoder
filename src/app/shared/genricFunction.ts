export function generateId(tab: any) {
    let maxId;
    if (tab.length == 0) {
        return 1;
    } else {
        maxId = tab[0].id;
        for (let i = 1; i < tab.length; i++) {
            if (tab[i].id > maxId) {
                maxId = tab[i].id;
            }
        }
        return maxId + 1
    }
}

export function getFormlS(key: string) {
    return JSON.parse(localStorage.getItem(key) || "[]");
}