import React from 'react';
export const InputText = (props) => {
  return(
    <div className="form-group">
      <label className="font-weight-bold" for={props.id == null || props.id == ""  ? "inputText" : props.id}>{props.title}</label>
      <input type="text" className="form-control" id={props.id == null || props.id == "" ? "inputText" : props.id} placeholder={props.placeholder}/>
      <small className="form-text">{props.note}</small>
    </div>
  )
}
export const InputNumber = (props) => {
  return(
    <div className="form-group">
      <label className="font-weight-bold" for={props.id == null || props.id == "" ? "inputNumber" : props.id}>{props.title}</label>
      <input type="number" className="form-control" id={props.id == null || props.id == "" ? "inputNumber" : props.id} placeholder={props.placeholder}/>
      <small className="form-text">{props.note}</small>
    </div>
  )
}
export const TextArea = (props) => {
  return(
    <div className="form-group">
      <label className="font-weight-bold" for={props.id == null || props.id == "" ? "textArea" : props.id}>{props.title}</label>
      <textarea className="form-control" id={props.id == null || props.id == "" ? "textArea" : props.id} rows="3" placeholder={props.placeholder}></textarea>
      <small className="form-text">{props.note}</small>
    </div>
  )
}
export const Select = (props) => {
  var opt = [1,2,3]
  var options = (
    opt.map((item) => {
      return(
      <option value={item}>{item}</option>
      )
    })
  )
  return(
    <div className="form-group">
      <label className="font-weight-bold">{props.title}</label>
      <select className="form-control" id={props.id == null || props.id == "" ? "select" : props.id}>
        {options}
      </select>
      <small className="form-text">{props.note}</small>
    </div>
  )
}
export const Checkbox = (props) => {
  return(
    <div className="form-group form-check">
      <input type="checkbox" class="form-check-input" id={props.id == null || props.id == "" ? "checkbox" : props.id}/>
      <label className="form-check-label" for={props.id == null || props.id == "" ? "checkbox" : props.id}>{props.title}</label>
    </div>
  )
}
export const Radio = (props) => {
  return(
    <div className="form-check">
      <input className="form-check-input" type="radio" name="exampleRadios" id={props.id == null || props.id == "" ? "radio" : props.id} value="option1"/>
      <label className="form-check-label" for={props.id == null || props.id == "" ? "radio" : props.id}>
        {props.title}
      </label>
    </div>
  )
}
export const Date = (props) => {
  return(
    <div className="form-row">
      <div className="form-group col-5">
        <label className="font-weight-bold" for={props.id == null || props.id == "" ? "date" : props.id}>{props.title}</label>
        <input type="date" className="form-control" id={props.id == null || props.id == "" ? "date" : props.id}/>
        <small className="form-text">{props.note}</small>
      </div>
    </div>
  )
}  
export const Time = (props) => {
  return(
    <div className="form-row">
      <div className="form-group col-5">
        <label className="font-weight-bold" for={props.id == null || props.id == "" ? "time" : props.id}>{props.title}</label>
        <input type="time" className="form-control" id={props.id == null || props.id == "" ? "time" : props.id}/>
        <small className="form-text">{props.note}</small>
      </div>
    </div>
  )
}
export const Button = (props) => {
  return(
    <button className="btn btn-primary">{props.value}</button>
  )
}