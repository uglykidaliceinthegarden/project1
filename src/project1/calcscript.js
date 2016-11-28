            var first = "";
            var second = "";
            var operatorClicked = "";
            var equalsClicked = false;
            var endOfOperation = false;
            function assembleNumber(input) {
                if (endOfOperation) {
                    clear_();
                    endOfOperation = false;
                }

                if (operatorClicked.length == 0) {
                    first += input;
                    displayValues(first);
                }
                else {
                    second += input;
                    displayValues(second);
                }
            }

            function displayValues(number) {
                if (operatorClicked.length == 0) {
                    document.getElementById("firstValue").innerHTML = number;
                }
                else {
                    document.getElementById("secondValue").innerHTML = number;
                }
            }

            function toggleOperator(operator) {
                operatorClicked = operator;
                return operatorClicked;
            }

            function calculate() {
                if (operatorClicked == "+") {
                    displayResult(parseInt(first) + parseInt(second));
                }
                else if (operatorClicked == "*") {
                    displayResult(parseInt(first) * parseInt(second));
                }
                else if (operatorClicked == "/") {
                    displayResult(parseInt(first) / parseInt(second));
                }
                 else if (operatorClicked == "-") {
                    displayResult(parseInt(first) - parseInt(second));
                }
                else {
                    return null;
                }
            }


            function displayResult(number) {                
                    document.getElementById("firstValue").innerHTML = "&nbsp;answer";
                    document.getElementById("secondValue").innerHTML = "&nbsp;=>" + number
                    endOfOperation = true;
                
            }

            function clear_() {
                first = "";
                second = "";
                operatorClicked = "";
                document.getElementById("firstValue").innerHTML = "_";
                document.getElementById("secondValue").innerHTML = "_";
            }