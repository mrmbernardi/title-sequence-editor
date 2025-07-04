const main = () => {
    if (typeof ui === 'undefined') {
        console.log("Plugin not available on headless mode.");
        return;
    }

    if (network.mode != "none") {
        console.log("Plugin not available in multiplayer.");
        return;
    }

    allocateImages();

    ui.registerMenuItem('Title Sequence Editor', () => {
        TitleEditorWindow.getOrOpen();
    });

    ui.registerToolboxMenuItem('Title Sequence Editor', () => {
        TitleEditorWindow.getOrOpen();
    });
};

registerPlugin({
    name: 'Title Sequence Editor',
    version: '1.2.0',
    authors: ['OpenRCT2'],
    type: 'intransient',
    licence: 'MIT',
    targetApiVersion: 52,
    main: main
});
