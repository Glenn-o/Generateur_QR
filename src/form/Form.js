import React, {Component} from 'react';

class Generateur_QR extends Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
        };
    }
    onChange(event){
        this.setState({
            userInput: event.target.value
        })
    }
    QR_generateur(event) {
        event.preventDefault();
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        var input = this.state.userInput;
        
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === this.DONE) {
            if(input !== ''){
                document.getElementById('qr_code').src = this.responseText;
                document.getElementById('qr_code').style.display = "flex";
                document.getElementById('instruction').innerHTML = "";
            }
            else{
                document.getElementById('instruction').innerHTML = "Veuillez remplir le champ ci-dessus pour générer un QR code."
                document.getElementById('instruction').style.transition = "200ms"
            }
          }
        });
        xhr.open("GET", "https://pierre2106j-qrcode.p.rapidapi.com/api?backcolor=ffffff&pixel=10%20to%20100&ecl=L%20%257C%20M%257C%20Q%20%257C%20H&forecolor=000000&type=text%20%257C%20url%20%257C%20tel%20%257C%20sms%20%257C%20email&text="+ this.state.userInput + "");
        xhr.setRequestHeader("x-rapidapi-host", "pierre2106j-qrcode.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "44b462bf97mshf5b71d247e27b75p1fbdb5jsn8b5370399f32");
        
        xhr.send(data);
    }


    render(){
        return(
            <div className="form">
                <img src="" alt="qr_code" id="qr_code"/>
                <form className="container_form">
                    <input id="input" type="text" value={this.state.userInput} placeholder="Renseigner une URL, un email, etc..." onChange={this.onChange.bind(this)}/>
                    <button onClick={this.QR_generateur.bind(this)} id="button">Générer</button>
                </form>
                <p id="instruction"></p>
            </div>
        );
    }
};

export default Generateur_QR;