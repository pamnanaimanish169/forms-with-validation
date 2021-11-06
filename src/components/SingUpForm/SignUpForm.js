import  './SignUpForm.css';
import  React   from    'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class   SignUpForm  extends React.Component {
    state   =   {
        username    :   "",
        password    :   "",
        confirmPassword :   "",
        gender      :   "",
        checkbox    :   "",
        number      :   "",
        errors      :   {}
    }

    onChange(event) {
        console.log(this.state);
        console.log(event);

        console.log(event.target.type);

        if(event.target.type    !=  'checkbox') {
            this.setState({[event.target.name]  :   event.target.value});
        }   else    {
            console.log(event.target.checked);
            this.setState({[event.target.name]  :   event.target.checked});
        }

        console.log(this.state);
    }

    formValidation()    {
        const regex =   /[^a-zA-Z0-9]/;
        const passwordRegex =   "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
        const numberRegex   =   /^[6-9]\d{9}$/;
        const   {username,  password, confirmPassword, gender, checkbox, number}   =   this.state;

        console.log(number);
        console.log(number.match(numberRegex));

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

        console.log(confirmPassword ==  password);

        if(confirmPassword.trim().length    <   8)  {
            errors.confirmPassword  =   "Confirm Password must be of Length 8 or higher";
        }

        if((password && confirmPassword)  &&  confirmPassword !=  password)  {

            console.log('inside confirm password');

            errors.confirmPassword  =   "Password & Confirm Password should match";
            isValid =   false;
        }

        if(confirmPassword.trim().match(passwordRegex))    {
            errors.confirmPassword =   "Confirm Password should contain Minimum eight characters, at least one letter and one number.";
            isValid =   false;
        }

        if(!gender)  {
            console.log(gender);
            errors.gender   =   "Gender is required.";
            isValid =   false;
        } 

        if(!(number.match(numberRegex)))   {
            errors.number   =   "Number should be of 10 characters & should be in the following format 988xxxxx44";
            isValid =   false;

            console.log(number);
        }

        console.log(checkbox);
        console.log(gender);
        console.log(errors);

        if(!checkbox)   {
            errors.checkbox =   "Terms &  Conditions is required.";
            isValid =   false;
        }

        this.setState({errors});
        return isValid;
    }

    onSubmit(event) {
        event.preventDefault();

        const   isValid =   this.formValidation();

        console.log(isValid);

        if(isValid) {
            console.log(this.state);
        }
    }

    constructor(props)  {
        super(props);

        this.onChange   =   this.onChange.bind(this);
        this.onSubmit   =   this.onSubmit.bind(this);

    }

    render()    {
        const {username, password, confirmPassword, gender, number, errors}  =   this.state;
        
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
                        type="password"    
                        placeholder="Enter Password"
                        value={password}
                        onChange={this.onChange}
                        name="password"
                        ></Form.Control>

                        {errors.password ? <div className="error-block">{errors.password}</div>   :   ''}

                    </Form.Group>

                    <Form.Group className="mb-3"    controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control   
                        type="password"    
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={this.onChange}
                        name="confirmPassword"
                        ></Form.Control>

                        {errors.confirmPassword ? <div className="error-block">{errors.confirmPassword}</div>   :   ''}

                    </Form.Group>

                    <Form.Group className="mb-3"    controlId="formBasicPassword">
                        <Form.Label>Gender</Form.Label>
                        <Form.Check
                        type="radio"
                        id="male"
                        label="Male"
                        name="gender"
                        value="male"
                        onChange={this.onChange}
                        ></Form.Check>

                        <Form.Check
                        type="radio"
                        id="female"
                        label="Female"
                        name="gender"
                        value="female"
                        onChange={this.onChange}
                        ></Form.Check>

                        {errors.gender  ?   <div    className="error-block">{errors.gender}</div>   :   ''}

                    </Form.Group>

                    <Form.Group className="mb-3"    controlId="formBasicName">
                        <Form.Label>Number</Form.Label>
                        <Form.Control   
                        type="number"    
                        placeholder="Enter Number"
                        value={number}
                        onChange={this.onChange}
                        name="number"
                        ></Form.Control>

                        {errors.number ? <div className="error-block">{errors.number}</div>   :   ''}
                    </Form.Group>

                    <Form.Group className="mb-3"    controlId="formBasicPassword">
                        <Form.Check
                        type="checkbox"
                        onChange={this.onChange}
                        label="I accept the Terms & Conditions"
                        name="checkbox"
                        
                        ></Form.Check>

                        {errors.checkbox  ?   <div    className="error-block">{errors.checkbox}</div>   :   ''}

                    </Form.Group>

                    <Button variant="primary"   onClick={this.onSubmit}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export  default SignUpForm;