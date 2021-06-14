import React, { useState, useEffect } from "react";
import { data } from "../Data/data";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Questions = () => {
	const [questions, setQuestions] = useState(data);
	const [show, setShow] = useState(false);

	

	return (
        <div className="Q-card">
            <div className="t-h2">
                <h2>Most asked questions</h2>
            </div>
			
			{questions.map((question) => {
				const { id, title, info } = question;
				return (
					<div key={id}>
						<div className="Text-card">
							<div className="head">
								<h3>{title}</h3>
								<button onClick={() => setShow(!show)}>
									{show ? <AiOutlineMinus /> : <AiOutlinePlus />}
								</button>
							</div>

                            {show && <p>{info }</p>}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Questions;
