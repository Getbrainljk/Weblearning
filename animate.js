/**
 * Created by arbia_n on 11/07/17.
 */
(function () {

    var s1 = document.getElementById("s1").style;
    s1.left = 0;
    s1.top = 0;
    var s2 = document.getElementById("s2").style;
    s2.right = 0;
    s2.top = 0;
    var s3 = document.getElementById("s3").style;
    s3.right = 0;
    s3.bottom = 0;
    var s4 = document.getElementById("s4").style;
    s4.left = 0;
    s4.bottom = 0;

    function up_left (square) {
        var left = square.style.left;
        var left_number = Number(left.replace(/\D/g, ''));
        var right = square.style.right;
        right = Number(right.replace(/\D/g, ''));
        if (left != "" && left_number < 35) {
            left_number += 5;
            square.style.left = left_number + "%";
            setTimeout(up_left, 100, square);
        } else if (left != "" && left_number >= 35) {
            square.style.left = "";
            square.style.right = "75%";
            setTimeout(up_left, 100, square);
        } else if (right > 0) {
            right -= 5;
            square.style.right = right + "%";
            setTimeout(up_left, 100, square);
        }
    }
    function up_right (square) {
        var left = square.style.top;
        var left_number = Number(left.replace(/\D/g, ''));
        var right = square.style.bottom;
        right = Number(right.replace(/\D/g, ''));
        if (left != "" && left_number < 35) {
            left_number += 5;
            square.style.top = left_number + "%";
            setTimeout(up_right, 100, square);
        } else if (left != "" && left_number >= 35) {
            square.style.top = "";
            square.style.bottom = "75%";
            setTimeout(up_right, 100, square);
        } else if (right > 0) {
            right -= 5;
            square.style.bottom = right + "%";
            setTimeout(up_right, 100, square);
        }
    }
    function down_right (square) {
        var left = square.style.right;
        var left_number = Number(left.replace(/\D/g, ''));
        var right = square.style.left;
        console.log(left);
        right = Number(right.replace(/\D/g, ''));
        if (left != "" && left_number < 35) {
            left_number += 5;
            square.style.right = left_number + "%";
            setTimeout(down_right, 100, square);
        } else if (left != "" && left_number >= 35) {
            square.style.right = "";
            square.style.left = "75%";
            setTimeout(down_right, 100, square);
        } else if (right > 0) {
            right -= 5;
            square.style.left = right + "%";
            setTimeout(down_right, 100, square);
        }
    }
    function down_left (square) {
        var left = square.style.bottom;
        var left_number = Number(left.replace(/\D/g, ''));
        var right = square.style.top;
        right = Number(right.replace(/\D/g, ''));
        if (left != "" && left_number < 35) {
            left_number += 5;
            square.style.bottom = left_number + "%";
            setTimeout(down_left, 100, square);
        } else if (left != "" && left_number >= 35) {
            square.style.bottom = "";
            square.style.top = "75%";
            setTimeout(down_left, 100, square);
        } else if (right > 0) {
            right -= 5;
            square.style.top = right + "%";
            setTimeout(down_left, 100, square);
        }
    }
    var squares = document.getElementsByClassName("square");
    document.getElementById("animater").onclick = function () {
        var square;
        var style;
        var i;
        for (i = 0; i < squares.length; i++) {
            square = squares[i];
            if ((square.style.left == "0px" || square.style.left == "0%") && (square.style.top == "0px" || square.style.top == "0%")) {
                up_left(square);
            }
            else if ((square.style.right == "0px" || square.style.right == "0%") && (square.style.top == "0px" || square.style.top == "0%")) {
                up_right(square);
            }
            else if ((square.style.right == "0px" || square.style.right == "0%") && (square.style.bottom == "0px" || square.style.bottom == "0%")) {
                down_right(square);
            }
            else if ((square.style.left == "0px" || square.style.left == "0%") && (square.style.bottom == "0px" || square.style.bottom == "0%")) {
                down_left(square);
            }
        }
    };


})();
