async function init() {
    await wasm_bindgen("pkg/grafeia_web_bg.wasm").catch(console.error);
    let app = new wasm_bindgen.Grafeia();
    app.show();
}
init();

function test_unload() {
    var event = document.createEvent('Event');
    event.initEvent('unload', true, true);
    window.dispatchEvent(event);
}
