async function init() {
    if (localStorage.getItem("reset")) {
        localStorage.clear();
    }
    await wasm_bindgen("pkg/grafeia_web_bg.wasm").catch(function(e) {
        console.error(e);
        document.getElementById("status").innerText += " failed.";
    });
    let app = new wasm_bindgen.Grafeia();
    app.show();
}
init();

function test_unload() {
    var event = document.createEvent('Event');
    event.initEvent('unload', true, true);
    window.dispatchEvent(event);
}
function reset() {
    localStorage.setItem("reset", "reset");
    window.location.reload();
}
