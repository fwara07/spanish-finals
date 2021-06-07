import React, { Component } from "react";
import { Button, Input, message } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import data from "../data.js";

export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      question: this.props.question,
      answer: this.props.answer,
      userAnswer: "",
      renderMsg: false,
      is_done: false,
    };
  }

  handleSubmit = () => {
    const new_id = this.state.id + 1;
    if (
      this.state.userAnswer.toLowerCase() === this.state.answer.toLowerCase()
    ) {
      if (data.length === new_id) {
        this.setState({ is_done: true });
      } else {
        this.handleNext();
      }
    } else {
      message.error(`NO. Es: ${this.state.answer}`);
    }
  };

  handleChange = (e) => {
    this.setState({
      userAnswer: e.target.value,
    });
  };

  handleBack = () => {
    const back_id = this.state.id - 1;
    this.setState({
      id: back_id,
      question: data[back_id].question,
      answer: data[back_id].answer,
      userAnswer: "",
      renderMsg: false,
      is_done: false,
    });
  };

  handleNext = () => {
    const new_id = this.state.id + 1;
    this.setState({
      id: new_id,
      question: data[new_id].question,
      answer: data[new_id].answer,
      userAnswer: "",
      renderMsg: false,
      is_done: false,
    });
  };

  handleRestart = () => {
    this.setState({
      id: 0,
      question: data[0].question,
      answer: data[0].answer,
      userAnswer: "",
      renderMsg: false,
      is_done: false,
    });
  };

  render() {
    return (
      <>
        {this.state.is_done ? (
          <div style={{ textAlign: "center", paddingTop: "40vh" }}>
            <h1>¡Terminaste todas las preguntas!</h1>
            <Button
              type="primary"
              size="large"
              shape="round"
              onClick={this.handleRestart}
            >
              Empezar de nuevo
            </Button>
          </div>
        ) : (
          <div style={{ textAlign: "center", paddingTop: "40vh" }}>
            <h1>{this.state.question}</h1>
            <Input
              size="large"
              style={{ width: "300px" }}
              placeholder="Frase en español"
              value={this.state.userAnswer}
              onChange={this.handleChange}
              onPressEnter={this.handleSubmit}
            />
            <br />
            <br />
            <Button
              icon={<LeftOutlined />}
              style={{ marginRight: "50px" }}
              shape="circle"
              type="primary"
              disabled={this.state.id === 0 ? true : false}
              onClick={this.handleBack}
            />
            <Button
              icon={<RightOutlined />}
              style={{ marginLeft: "50px" }}
              shape="circle"
              type="primary"
              disabled={this.state.id === data.length - 1 ? true : false}
              onClick={this.handleNext}
            />
          </div>
        )}
      </>
    );
  }
}
