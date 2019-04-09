import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function component2() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -5000 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c2style}>
            <h1>Hi there</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat numquam, nulla nostrum, officia soluta inventore repellendus, eaque nihil sed voluptas ea? Deserunt iure, suscipit exercitationem earum aliquam iusto nihil nulla!
            </p>
            <Spring
              from={{ number: 0 }}
              to={{ number: 10 }}
              config={{ duration: 10000 }}>
              {props => <div>
                <h1 style={counter}>{props.number.toFixed()}</h1>
              </div>}
            </Spring>
          </div>
        </div>
      )}
    </Spring>

  )
}

const c2style = {
  background: '#F9CE21',
  color: '#111',
  padding: '1.5rem'
}

const counter = {
  background: '#FFF',
  textAlign: 'center',
  width: '100px',
  height: '40px',
  width: '40px',
  borderRadius: '50%',
  margin: '1rem auto'
}