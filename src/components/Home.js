import React, { Component } from "react";
import { Button } from "antd";
import Questions from "./Questions";
import data from "../data.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_start: false,
      data: data,
    };
  }
  render() {
    return (
      <>
        {this.state.is_start === false ? (
          <div style={{ textAlign: "center", paddingTop: "40vh" }}>
            <h1>
              ¡Estudia todo el material necesario para la prueba de español!
            </h1>
            <Button
              shape="round"
              size="large"
              type="primary"
              onClick={() => {
                this.setState({ is_start: true });
              }}
            >
              Comienzo
            </Button>
          </div>
        ) : (
          <Questions
            id={0}
            question={data[0].question}
            answer={data[0].answer}
          />
        )}
      </>
    );
  }
}
