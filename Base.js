var tl = document.getElementById('tl');
var tm = document.getElementById('tm');
var tr = document.getElementById('tr');

var ml = document.getElementById('ml');
var mm = document.getElementById('mm');
var mr = document.getElementById('mr');

var bl = document.getElementById('bl');
var bm = document.getElementById('bm');
var br = document.getElementById('br');

var reset = document.getElementById('reset');

var counter = 0;

var tl_O = document.getElementById('tl_O');
var tl_X = document.getElementById('tl_X');
var tm_O = document.getElementById('tm_O');
var tm_X = document.getElementById('tm_X');
var tr_O = document.getElementById('tr_O');
var tr_X = document.getElementById('tr_X');

var ml_O = document.getElementById('ml_O');
var ml_X = document.getElementById('ml_X');
var mm_O = document.getElementById('mm_O');
var mm_X = document.getElementById('mm_X');
var mr_O = document.getElementById('mr_O');
var mr_X = document.getElementById('mr_X');

var bl_O = document.getElementById('bl_O');
var bl_X = document.getElementById('bl_X');
var bm_O = document.getElementById('bm_O');
var bm_X = document.getElementById('bm_X');
var br_O = document.getElementById('br_O');
var br_X = document.getElementById('br_X');

function win() { 
    if (tl_X.classList.contains('visible') && tm_X.classList.contains('visible') && tr_X.classList.contains('visible')) {
        console.log('Top row X wins!')   
    } 
    if (tl_O.classList.contains('visible') && tm_O.classList.contains('visible') && tr_O.classList.contains('visible')) {
        console.log('Top row O wins!')   
    } 
    if (ml_X.classList.contains('visible') && mm_X.classList.contains('visible') && mr_X.classList.contains('visible')) {
        console.log('middle row X wins!')   
    } 
    if (ml_O.classList.contains('visible') && mm_O.classList.contains('visible') && mr_O.classList.contains('visible')) {
        console.log('middle row O wins!')   
    } 
    if (bl_X.classList.contains('visible') && bm_X.classList.contains('visible') && br_X.classList.contains('visible')) {
        console.log('bottom row X wins!')   
    } 
    if (bl_O.classList.contains('visible') && bm_O.classList.contains('visible') && br_O.classList.contains('visible')) {
        console.log('bottom row O wins!')   
    } 
}


tl.addEventListener('click', function() {
    tl.classList.add('flipped')
    counter++
    if (counter%2 == 0) {
        tl_O.style.display = 'none'
        tl_X.classList.add('visible')
    } else {
        tl_X.style.display = 'none'
        tl_O.classList.add('visible')
    }
   win()
})

tm.addEventListener('click', function() {
    tm.classList.add('flipped')
    counter++
    if (counter%2 == 0) {
        tm_O.style.display = 'none'
        tm_X.classList.add('visible')
    } else {
        tm_X.style.display = 'none'
        tm_O.classList.add('visible')
    }
    win()
    })

tr.addEventListener('click', function() {
    tr.classList.add('flipped')
    counter++
    if (counter%2 == 0) {
        tr_O.style.display = 'none'
        tr_X.classList.add('visible')
    } else {
        tr_X.style.display = 'none'
        tr_O.classList.add('visible')
    }
    win()
    })

ml.addEventListener('click', function() {
    ml.classList.add('flipped')
    counter++
    if (counter%2 == 0) {
        ml_O.style.display = 'none'
        ml_X.classList.add('visible')
    } else {
        ml_X.style.display = 'none'
        ml_O.classList.add('visible')
    }
    win()
    })

mm.addEventListener('click', function() {
    mm.classList.add('flipped')
    counter++
    if (counter%2 == 0) {
        mm_O.style.display = 'none'
        mm_X.classList.add('visible')
    } else {
        mm_X.style.display = 'none'
        mm_O.classList.add('visible')
    }
    win()
    })

mr.addEventListener('click', function() {
    mr.classList.add('flipped')
    counter++
    if (counter%2 == 0) {
        mr_O.style.display = 'none'
        mr_X.classList.add('visible')
    } else {
        mr_X.style.display = 'none'
        mr_O.classList.add('visible')
    }
    win()
    })

bl.addEventListener('click', function() {
    bl.classList.add('flipped')
    counter++
    if (counter%2 == 0) {
        bl_O.style.display = 'none'
        bl_X.classList.add('visible')
    } else {
        bl_X.style.display = 'none'
        bl_O.classList.add('visible')
    }
    win()
    })

bm.addEventListener('click', function() {
    bm.classList.add('flipped')
    counter++
    if (counter%2 == 0) {
        bm_O.style.display = 'none'
        bm_X.classList.add('visible')
    } else {
        bm_X.style.display = 'none'
        bm_O.classList.add('visible')
    }
    win()
    })

br.addEventListener('click', function() {
    br.classList.add('flipped')
    counter++
    if (counter%2 == 0) {
        br_O.style.display = 'none'
        br_X.classList.add('visible')
    } else {
        br_X.style.display = 'none'
        br_O.classList.add('visible')
    }
    win()
    })

reset.addEventListener('click', function() {
    console.log('it works!')
    tl.classList.remove('flipped')
    tm.classList.remove('flipped')
    tr.classList.remove('flipped')
    ml.classList.remove('flipped')
    mm.classList.remove('flipped')
    mr.classList.remove('flipped')
    bl.classList.remove('flipped')
    bm.classList.remove('flipped')
    br.classList.remove('flipped')

    tl_X.classList.remove('visible')
    tl_O.classList.remove('visible')

    tm_X.classList.remove('visible')
    tm_O.classList.remove('visible')

    tr_X.classList.remove('visible')
    tr_O.classList.remove('visible')

    ml_X.classList.remove('visible')
    ml_O.classList.remove('visible')

    mm_X.classList.remove('visible')
    mm_O.classList.remove('visible')

    mr_X.classList.remove('visible')
    mr_O.classList.remove('visible')

    bl_X.classList.remove('visible')
    bl_O.classList.remove('visible')

    bl_X.classList.remove('visible')
    bl_O.classList.remove('visible')

    br_X.classList.remove('visible')
    br_O.classList.remove('visible')
    

    console.log(counter)
    counter = 0
})