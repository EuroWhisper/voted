// Check whether or not the poll has already been voted on
export function alreadyVoted(id) {
    return (window.localStorage.getItem(id) !== null);
}

// Set the selected poll's status to voted
export function setPollVoted(id) {
    window.localStorage.setItem(id, id);
}