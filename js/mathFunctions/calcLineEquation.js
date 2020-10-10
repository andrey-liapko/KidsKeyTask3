export default function calcLineEquation(dots) {
    dots.sort((a, b) => {
        return a.y - b.y;
    });

    const middleDotY = (dots[3].y + dots[4].y) / 2;

    return middleDotY;

    /*const middleDotX = (dots[0].x + dots[1].x) / 2;
    const middleDotY = (dots[0].y + dots[1].y) / 2;

    const upperDotX = (dots[6].x + dots[7].x) / 2;
    const upperDotY = (dots[6].y + dots[7].y) / 2;


    const lineStartY = ((-upperDotX)*(upperDotY - middleDotY))/(upperDotX - middleDotX) + upperDotY;
    const lineEndY = ((lineLength-upperDotX)*(upperDotY - middleDotY))/(upperDotX - middleDotX) + upperDotY;

    line.lineStyle(1, 0x000000);
    line.moveTo(0, lineStartY);
    line.lineTo(app.screen.width, lineEndY);*/

    //const middleDotX = (dots[3].x + dots[4].x) / 2;
    /*const middleDotX = (dots[3].x + dots[4].x) / 2;
    const middleDotY = (dots[3].y + dots[4].y) / 2;

    const directionVectorA = dots[3].x - dots[2].x;
    const directionVectorB = dots[3].y - dots[2].y;
    
    const lineA = directionVectorB;
    const lineB = directionVectorA;
    const lineC = middleDotY * directionVectorA -(middleDotX * directionVectorB);

    const startLineY = -(lineC / lineB);
    const endLineY = -(lineA * lineLength + lineC)/lineB;*/
}
