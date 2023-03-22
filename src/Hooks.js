
function useState(initValue) {
    let val = initValue;
    const state = () => val;
    const setState = (newVal) => {
        val = newVal;
    };
    return [state, setState];
}
const [count, setCount] = useState(1);

function useEffect(callback, dependencyArr) {
    // old dependency 
    let isChanged = true; 
    // compare dependency 
    if (isChanged) callback();
    // new dependency 
} 