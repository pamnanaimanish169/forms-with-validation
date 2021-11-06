import  './SignUpForm.css';
import  React   from    'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class   SignUpForm  extends React.Component {
    state   =   {
        username    :   "",
        password    :   "",
        errors      :   {}
    }

    onChange(event) {
        this.setState({[event.target.name]  :   event.target.value});
    }

    formValidation()    {
        const regex =   /[^a-zA-Z0-9]/;
        const passwordRegex =   "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
        const   {username,  password}   =   this.state;

        let isValid =   true;
        const   errors  =   {};

        if(username.trim().length   <   6)  {
            errors.username   =   "Username must be of Length 6 or higher";
            isValid =   false;
        }

        if(username.trim().match(regex))    {
            console.log('matched ');
            errors.username =   "Username must not contain special characters.";
            isValid =   false;
        }

        if(password.trim().length   <   8)  {
            errors.password =   "Password must be of Length 8 or higher";
            isValid =   false;
        }

        if(password.trim().match(passwordRegex))    {
            errors.password =   "Password should contain Minimum eight characters, at least one letter and one number.";
            isValid =   false;
        }
        this.setState({errors});
        return isValid;
    }

    onSubmit(event) {
        event.preventDefault();

        const   isValid =   this.formValidation();
    }

    constructor(props)  {
        super(props);

        this.onChange   =   this.onChange.bind(this);
        this.onSubmit   =   this.onSubmit.bind(this);

    }

    render()    {
        const {username, password, errors}  =   this.state;
        console.log(errors);
        
        return  (
            <div>
                <Form>
                    <Form.Group className="mb-3"    controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control   
                        type="text"    
                        placeholder="Enter Name"
                        value={username}
                        onChange={this.onChange}
                        name="username"
                        ></Form.Control>

                        {errors.username ? <div className="error-block">{errors.username}</div>   :   ''}
                    </Form.Group>


                    <Form.Group className="mb-3"    controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control   
                        type="text"    
                        placeholder="Enter Password"
                        value={password}
                        onChange={this.onChange}
                        name="password"
                        ></Form.Control>

                        {errors.password ? <div className="error-block">{errors.password}</div>   :   ''}

                    </Form.Group>

                    <Button variant="primary"   onClick={this.onSubmit}>Submit</Button>

                    {/* {Object.keys(errors).map((key)  =>  {
                        return  <div    key={key}>{errors[key]}</div>
                    })} */}
                </Form>
            </div>
        )
    }
}

export  default SignUpForm;