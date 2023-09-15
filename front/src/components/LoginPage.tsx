import { useState } from 'react';
import Button from './Button'
import Fields from './Fields'
import CheckBox from './CheckBox'
import Header from './Header'

function LoginPage(){
    const [showPassword, setShowPassword] = useState(false);

    // Función para cambiar el atributo de 'cambio de contraseña'
    // Niega este atributo booleano (operador lógico NOT)
    function toggleShowPassword(){
      setShowPassword(!showPassword)
    }

    return (
        <header className="Login-header">
          <Header></Header>
          <label className = "Subtitle">🔐 Inicio de sesión 🔐</label>
          <label className = "Instructions">Para iniciar la sesión ingrese su usuario y contraseña.</label>
          <Fields showPassword = {showPassword}></Fields>
          <CheckBox onCheck = {toggleShowPassword} text = "Mostrar contraseña"></CheckBox>
          <label className = "FinalText"><u>Olvide mi contraseña.</u></label>
          <Button title = "🔑 Ingresar 🔑"></Button>
        </header>
    );

}

export default LoginPage;