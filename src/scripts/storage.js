const localStorageKey = 'notes'

export function store(content, ...mutators) {
    if (!content) {
        return
    }
    mutators.forEach(mutator => {
        content = mutator(content)
    })
    localStorage.setItem(localStorageKey, content)
}

export function fetch(...mutators) {
    let content = localStorage.getItem(localStorageKey)
    if (!content) {
        return content;
    }
    mutators.forEach(mutator => {
        content = mutator(content)
    })
    return content
}
