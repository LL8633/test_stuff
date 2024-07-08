            function validateInput() {
            const inputElement = document.getElementById('numberInput');
            const submitButton = document.getElementById('submitBtn');
            const inputValue = inputElement.value.trim();

            // Check if input value has 11 digits
            if (inputValue.length === 11) {
                submitButton.removeAttribute('disabled');
            } else {
                submitButton.setAttribute('disabled', 'true');
            }
        }