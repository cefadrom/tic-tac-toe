// #################### INTERFACES ####################

interface $gameGrid {
    occuped: boolean;
    icon: string | null;
}

// #################### CORE ####################

$(function () {

    // Global

    const _win = $(window);
    let _winHeight: number = _win.height();
    let _winWidth: number = _win.width();

    $(window).on('resize', function () {
        _winHeight = _win.height();
        _winWidth = _win.width();
        gameGridResize();
    });
    gameGridResize();

    // Game grid
    const _gameGrid = $('#game');
    generateGrid([
        {occuped: true, icon: null},
        {occuped: false, icon: null},
        {occuped: true, icon: null},
        {occuped: false, icon: null},
        {occuped: true, icon: null},
        {occuped: false, icon: null},
        {occuped: false, icon: null},
        {occuped: false, icon: null},
        {occuped: true, icon: null},
    ]);

    function gameGridResize() {
        let gameGrid = $('#game');
        if (_winHeight > _winWidth)
            gameGrid.removeClass('x-screen').addClass('y-screen');
        else
            gameGrid.removeClass('y-screen').addClass('x-screen');
    }

    function generateGrid(grid: $gameGrid[]) {
        for (let i = 0; i < grid.length; i++) {
            const caseData = grid[i];
            const caseOccuped = caseData.occuped ? 'unavailable' : 'available';
            _gameGrid.append(`<div class="case ${caseOccuped}" data-case-id="${i}"></div>`);
        }
    }

});
