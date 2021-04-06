import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Component } from "react";
import TodoService from "../../api/todo/TodoService";
import moment from "moment";
import * as Yup from "yup";
class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      description: "",
      targetDate: moment(new Date()).format("YYYY-MM-DD"),
      isCompleted: false,
      username: this.props.match.params.name,
    };
  }
  validationSchema = Yup.object().shape({
    description: Yup.string()
      .min(5, "Description should have atleast 5 characters.")
      .required("Description cannot be empty."),
    targetDate: Yup.date()
      .min(moment(new Date()).format("YYYY-MM-DD"), "Target Date cannot be past")
      .required("Target Date is required"),
  });

  componentDidMount() {
    if (this.props.match.params.id === "-1") {
      return;
    }
    this.getTodo();
  }

  getTodo = () => {
    TodoService.getTodo(
      this.props.match.params.name,
      this.props.match.params.id
    ).then((response) => {
      this.setState({
        description: response.data.description,
        targetDate: response.data.targetDate,
        isCompleted: response.data.isCompleted,
      });
    });
  };
  saveTodo = (values) => {
    const todo = {
      id:
        this.props.match.params.id === "-1" ? null : this.props.match.params.id,
      description: values.description,
      targetDate: values.targetDate,
      username: this.props.match.params.name,
      isCompleted: values.isCompleted,
    };
    if (this.props.match.params.id === "-1") {
      TodoService.createTodo(todo).then(() =>
        this.props.history.push("/todos")
      );
    } else {
      TodoService.updateTodo(todo).then(() =>
        this.props.history.push("/todos")
      );
    }
  };
  render() {
    let { description, targetDate, isCompleted } = this.state;

    return (
      <div>
        <h1>Todo</h1>
        <div className="container">
          <Formik
            enableReinitialize
            onSubmit={this.saveTodo}
            initialValues={{ description, targetDate, isCompleted }}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={this.validationSchema}
          >
            {(props) => (
              <Form>
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                      <fieldset className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Description :{" "}
                        </label>
                        <Field as="textarea" 
                          className="form-control form-textarea col-sm-9"
                          type="text-area"
                          name="description"
                          placeholder="Enter Description"
                        />
                        <ErrorMessage
                          name="description"
                          component="div"
                          className="text-danger"
                        />
                      </fieldset>
                      <fieldset className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Target Date :{" "}
                        </label>
                        <Field
                          className="form-control col-sm-9"
                          type="date"
                          name="targetDate"
                          min={new Date()}
                        />
                        <ErrorMessage
                          name="targetDate"
                          component="div"
                          className="text-danger"
                        />
                      </fieldset>

                      <fieldset className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Is Completed :{" "}
                        </label>
                        <Field className="form-control col-sm-9" as="select" name="isCompleted">
                          <option value="true">TRUE</option>
                          <option value="false">FALSE</option>
                        </Field>
                      </fieldset>
                    </div>

                    <div className="col-sm-3"></div>
                  </div>
                </div>

                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}
export default TodoComponent;
