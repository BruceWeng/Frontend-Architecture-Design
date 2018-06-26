import * as React from "react";

interface IFormStates {
    value: string
}

class Form extends React.Component<any, IFormStates> {
    public constructor(props: any) {
        super(props);
        this.state = {
            value: "Default Value"
        }
    }

    public render() {
        // Do not create Input component because onChange function interface might
        // be conflicted to different event handler

        // Scalable by adding more input with ids
        return (
            <form onSubmit={this.handleSubmit}>
                <input id="1" name="search-bar" type="txet" value={this.state.value} onChange={this.handleChange}/>
                <input name="submit-button" type="submit" value="Submit"/>
            </form>
        );
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        this.updateStateValue(target);
    }

    private updateStateValue = (target: HTMLInputElement) => {
        const { value } = target;
        this.setState({ value });
    }

    private handleSubmit = () => {
        const { value } = this.state;
        alert(`Value submited: ${value}`);
    }
}

export default Form;
