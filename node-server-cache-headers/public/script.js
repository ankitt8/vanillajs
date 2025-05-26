console.log('hi')
function handleBeforeUnloadEvent() {
    console.log('handleBeforeUnloadEvent');

}
window.addEventListener('beforeunload', handleBeforeUnloadEvent);