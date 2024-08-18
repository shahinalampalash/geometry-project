function reactUse0() {
    const reatItemWidth = reatItem('rectangle-w');
    const reatItemLength = reatItem('rectangle-l');
    const area = reatItemWidth * reatItemLength;
    setInnerTextId('reactoutput', area)
    }
    
    // peralelogram
    
    function reactUse1() {
    const reatItemWidth = reatItem('Parallelogram-base');
    const reatItemLength = reatItem('Parallelogram-height');
    const area = reatItemWidth * reatItemLength;
    setInnerTextId('paraoutput', area)
    }
    
    // Rhombus card
    function reactUse2() {
        const reatItemWidth = reatItem('rhombus-base');
        const reatItemLength = reatItem('rhombus-height');
        const area = 0.5 * reatItemWidth * reatItemLength;
        setInnerTextId('rhombosoutput', area)
        }
    
    function reactUse3() {
        const reatItemWidth = reatItem('Pentagon-base');
        const reatItemLength = reatItem('Pentagon-base');
        const area = 0.5 * reatItemWidth * reatItemLength;
        setInnerTextId('Pentagonoutput', area)
        }
    function reactUse4() {
        const reatItemWidth = reatItem('ellipse-base');
        const reatItemLength = reatItem('ellipse-height');
        const area = 3.1416 * reatItemWidth * reatItemLength;
        setInnerTextId('ellipsoutput', area)
        }
    
    
    function reatItem(element){
        const reatId= document.getElementById(element);
        const reatIdValue = reatId.value;
        const value= parseFloat(reatIdValue);
        return value;
    }
    function setInnerTextId(elementId, area){
        const element = document.getElementById(elementId);
        element.innerText = area;
    }