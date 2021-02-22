var tl = document.getElementById('tl');
var tm = document.getElementById('tm');
var tr = document.getElementById('tr');

var ml = document.getElementById('ml');
var mm = document.getElementById('mm');
var mr = document.getElementById('mr');

var bl = document.getElementById('bl');
var bm = document.getElementById('bm');
var br = document.getElementById('br');

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

var counter = 0;
var reset = document.getElementById('reset');

function win() { 
  // top row
    if (tl_X.classList.contains('visible') && tm_X.classList.contains('visible') && tr_X.classList.contains('visible')) {
      console.log('Top row X wins!')   
    } 
    if (tl_O.classList.contains('visible') && tm_O.classList.contains('visible') && tr_O.classList.contains('visible')) {
      console.log('Top row O wins!')   
    }

  // middle row
    if (ml_X.classList.contains('visible') && mm_X.classList.contains('visible') && mr_X.classList.contains('visible')) {
      console.log('middle row X wins!')   
    } 
    if (ml_O.classList.contains('visible') && mm_O.classList.contains('visible') && mr_O.classList.contains('visible')) {
      console.log('middle row O wins!')   
    }

  // bottom row
    if (bl_X.classList.contains('visible') && bm_X.classList.contains('visible') && br_X.classList.contains('visible')) {
      console.log('bottom row X wins!')   
    } 
    if (bl_O.classList.contains('visible') && bm_O.classList.contains('visible') && br_O.classList.contains('visible')) {
      console.log('bottom row O wins!')   
    }

  // left column
    if (tl_X.classList.contains('visible') && ml_X.classList.contains('visible') && bl_X.classList.contains('visible')) {
      console.log('left column X wins!')   
    } 
    if (tl_O.classList.contains('visible') && ml_O.classList.contains('visible') && bl_O.classList.contains('visible')) {
      console.log('left column O wins!')   
    }

  // middle column
    if (tm_X.classList.contains('visible') && mm_X.classList.contains('visible') && bm_X.classList.contains('visible')) {
      console.log('middle column X wins!')   
    } 
    if (tm_O.classList.contains('visible') && mm_O.classList.contains('visible') && bm_O.classList.contains('visible')) {
      console.log('middle column O wins!')   
    }

  // right column
    if (tr_X.classList.contains('visible') && mr_X.classList.contains('visible') && br_X.classList.contains('visible')) {
      console.log('right column X wins!')   
    } 
    if (tr_O.classList.contains('visible') && mr_O.classList.contains('visible') && br_O.classList.contains('visible')) {
      console.log('right column O wins!')   
    }

  // left diagonal
    if (tl_X.classList.contains('visible') && mm_X.classList.contains('visible') && br_X.classList.contains('visible')) {
      console.log('left diagonal X wins!')   
    } 
    if (tl_O.classList.contains('visible') && mm_O.classList.contains('visible') && br_O.classList.contains('visible')) {
      console.log('left diagonal O wins!')   
    }

  // right diagonal
    if (tr_X.classList.contains('visible') && mm_X.classList.contains('visible') && bl_X.classList.contains('visible')) {
      console.log('right diagonal X wins!')   
    } 
    if (tr_O.classList.contains('visible') && mm_O.classList.contains('visible') && bl_O.classList.contains('visible')) {
      console.log('right diagonal O wins!')   
    }
    
}


// this event fires every time the panel is flipped. 
// it first asks if the panel has already been flipped...
// if the panel has already been flipped, then nothing happens. 'return' is a word that is supposed to say 'stop here and leave'. nothing happens after return
// if the panel hasn't been flipped, then the 'else' function runs. this ensures that nothing weird happens when you click on a panel that's been clicked before

tl.addEventListener('click', function() {
  if(tl.classList.contains('flipped')) {
    return
  } else {
    tl.classList.add('flipped')
    counter++
      if (counter%2 == 0) {
          tl_O.classList.add('invisible')
          tl_X.classList.add('visible')
      } else {
          tl_X.classList.add('invisible')
          tl_O.classList.add('visible')
      }
   win()
  }
})

tm.addEventListener('click', function() {
  if(tm.classList.contains('flipped')) {
    return
  } else {
    tm.classList.add('flipped')
    counter++
      if (counter%2 == 0) {
          tm_O.classList.add('invisible')
          tm_X.classList.add('visible')
      } else {
          tm_X.classList.add('invisible')
          tm_O.classList.add('visible')
      }
    win()
      }
  })

tr.addEventListener('click', function() {
  if(tr.classList.contains('flipped')) {
    return
  } else {
    tr.classList.add('flipped')
    counter++
      if (counter%2 == 0) {
          tr_O.classList.add('invisible')
          tr_X.classList.add('visible')
      } else {
          tr_X.classList.add('invisible')
          tr_O.classList.add('visible')
      }
    win()
      }  
  })

ml.addEventListener('click', function() {
  if(ml.classList.contains('flipped')) {
    return
  } else {
    ml.classList.add('flipped')
    counter++
      if (counter%2 == 0) {
          ml_O.classList.add('invisible')
          ml_X.classList.add('visible')
      } else {
          ml_X.classList.add('invisible')
          ml_O.classList.add('visible')
      }
    win()    
    }
  })

mm.addEventListener('click', function() {
  if(mm.classList.contains('flipped')) {
    return
  } else {
    mm.classList.add('flipped')
    counter++
      if (counter%2 == 0) {
          mm_O.classList.add('invisible')
          mm_X.classList.add('visible')
      } else {
          mm_X.classList.add('invisible')
          mm_O.classList.add('visible')
      }
    win()    
    }
  })

mr.addEventListener('click', function() {
  if(mr.classList.contains('flipped')) {
    return
  } else {
    mr.classList.add('flipped')
    counter++
      if (counter%2 == 0) {
          mr_O.classList.add('invisible')
          mr_X.classList.add('visible')
      } else {
          mr_X.classList.add('invisible')
          mr_O.classList.add('visible')
      }
    win()    
    }
  })

bl.addEventListener('click', function() {
  if(bl.classList.contains('flipped')) {
    return
  } else {
    bl.classList.add('flipped')
    counter++
      if (counter%2 == 0) {
          bl_O.classList.add('invisible')
          bl_X.classList.add('visible')
      } else {
          bl_X.classList.add('invisible')
          bl_O.classList.add('visible')
      }
    win()    
    }
  })

bm.addEventListener('click', function() {
  if(bm.classList.contains('flipped')) {
    return
  } else {
    bm.classList.add('flipped')
    counter++
      if (counter%2 == 0) {
          bm_O.classList.add('invisible')
          bm_X.classList.add('visible')
      } else {
          bm_X.classList.add('invisible')
          bm_O.classList.add('visible')
      }
    win()    
    }
  })

br.addEventListener('click', function() {
  if(br.classList.contains('flipped')) {
    return
  } else {
    br.classList.add('flipped')
    counter++
      if (counter%2 == 0) {
          br_O.classList.add('invisible')
          br_X.classList.add('visible')
      } else {
          br_X.classList.add('invisible')
          br_O.classList.add('visible')
      }
    win()    
    }
  })

reset.addEventListener('click', function() {
    tl.classList.remove('flipped')
    tm.classList.remove('flipped')
    tr.classList.remove('flipped')
    ml.classList.remove('flipped')
    mm.classList.remove('flipped')
    mr.classList.remove('flipped')
    bl.classList.remove('flipped')
    bm.classList.remove('flipped')
    br.classList.remove('flipped')

    tl_X.classList.remove('visible', 'invisible')
    tl_O.classList.remove('visible', 'invisible')

    tm_X.classList.remove('visible', 'invisible')
    tm_O.classList.remove('visible', 'invisible')

    tr_X.classList.remove('visible', 'invisible')
    tr_O.classList.remove('visible', 'invisible')

    ml_X.classList.remove('visible', 'invisible')
    ml_O.classList.remove('visible', 'invisible')

    mm_X.classList.remove('visible', 'invisible')
    mm_O.classList.remove('visible', 'invisible')

    mr_X.classList.remove('visible', 'invisible')
    mr_O.classList.remove('visible', 'invisible')

    bl_X.classList.remove('visible', 'invisible')
    bl_O.classList.remove('visible', 'invisible')

    bm_X.classList.remove('visible', 'invisible')
    bm_O.classList.remove('visible', 'invisible')

    br_X.classList.remove('visible', 'invisible')
    br_O.classList.remove('visible', 'invisible')
    
    counter = 0

    console.log(counter)
})