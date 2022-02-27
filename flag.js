function addSpace(max) {
    let a = ''
    for (let i = 1; i <= max; i++) {
        a = a + ' '
    }
    return a
}

function addHorizontalLine(max) {
    const a = addSpace(12)
    let b = ''
    for (let i = 1; i <= max; i++) b = b + '-'
    console.log(a + b)   
}

function addVerticalLine(max, type) {
    let h = max/2
    for (let i = 1; i <= 3; i++) {
        const a = addSpace(12)
        let b = ''
        for (j = 1; j <= max; j++) {
            if (type == 'vertical') {
                if (j == 1 || j == 2 || j == max) b = b + '|'
                else b = b + ' '
            } else if (type == 'midVertical') {
                if (j == 1 || j == 2 || j == max) b = b + '|'
                else if (j > h - 3 && j < h + 4 && (i == 1 || i == 3) && (j == h - 2 || j == h + 3)) b = b + ' '
                else if (j > h - 3 && j < h + 4) b = b + '*'
                else b = b + ' '
            }
        }
        console.log(a + b)
    }
}

function verticalLine() {
    for (let i = 1; i <= 18; i++) {
        const a = addSpace(12)
        let b = ''
        for (j = 1; j <= 2; j++) b = b + '|'
        console.log(a + b)
    }
}

function footer() {
    for (let i = 1; i <= 3; i++) {
        const a = addSpace(6)
        let b = ''
        for (let k = 1; k <= 14; k++) {
           if (i == 1) b = b + '-'
           else if (i != 1 && (k == 1 || k == 14)) b = b + '|'
           else b = b + ' '
        } 
        console.log(a + b)
    }

    for (let i = 1; i <= 3; i++) {
        const a = addSpace(3)
        let b = ''
        for (let k = 1; k <= 20; k++) {
           if (i == 1) b = b + '-'
           else if (i != 1 && (k == 1 || k == 20)) b = b + '|'
           else b = b + ' '
        } 
        console.log(a + b)
    }

    for (let i = 1; i <= 4; i++) {
       let b = ''
       for (let k = 1; k <= 26; k++) {
          if (i == 1 || i == 4) b = b + '-'
          else if (i != 1 && (k == 1 || k == 26)) b = b + '|'
          else b = b + ' '
       } 
       console.log(b)
    }
}

addHorizontalLine(46)
addVerticalLine(46, 'vertical')
addHorizontalLine(46)
addVerticalLine(46, 'midVertical')
addHorizontalLine(46)
addVerticalLine(46, 'vertical')
addHorizontalLine(46)
verticalLine()
footer()
