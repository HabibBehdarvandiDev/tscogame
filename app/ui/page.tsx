import React from "react";
import Button from "../components/UI/Buttons/Button";
import { HiArrowDownTray } from "react-icons/hi2";

const Ui = () => {
  return (
    <div>
      <section>
        <h1>Button</h1>
        <div className="flex flex-col justify-start items-start">
          <h3>Colors</h3>
          <div className="flex">
            <Button content={"ادامه خرید"} color="primary" size="sm" />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="secondary"
              size="sm"
            />
            <Button content={"سلام من یک دکمه هستم"} color="danger" size="sm" />
            <Button content={"سلام من یک دکمه هستم"} color="info" size="sm" />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="warning"
              size="sm"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="success"
              size="sm"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <h3>Variants</h3>
          <div className="flex">
            <Button
              content={"سلام من یک دکمه هستم"}
              color="primary"
              size="sm"
              variant="dashed"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="secondary"
              size="sm"
              variant="dashed"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="danger"
              size="sm"
              variant="dashed"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="info"
              size="sm"
              variant="dashed"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="warning"
              size="sm"
              variant="dashed"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="success"
              size="sm"
              variant="dashed"
            />
          </div>
          <div className="flex">
            <Button
              content={"سلام من یک دکمه هستم"}
              color="primary"
              size="sm"
              variant="ghost"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="secondary"
              size="sm"
              variant="ghost"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="danger"
              size="sm"
              variant="ghost"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="info"
              size="sm"
              variant="ghost"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="warning"
              size="sm"
              variant="ghost"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="success"
              size="sm"
              variant="ghost"
            />
          </div>
          <div className="flex">
            <Button
              content={"سلام من یک دکمه هستم"}
              color="primary"
              size="sm"
              variant="outlined"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="secondary"
              size="sm"
              variant="outlined"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="danger"
              size="sm"
              variant="outlined"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="info"
              size="sm"
              variant="outlined"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="warning"
              size="sm"
              variant="outlined"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="success"
              size="sm"
              variant="outlined"
            />
          </div>

          <div className="flex">
            <Button
              content={"سلام من یک دکمه هستم"}
              color="primary"
              size="sm"
              variant="link"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="secondary"
              size="sm"
              variant="link"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="danger"
              size="sm"
              variant="link"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="info"
              size="sm"
              variant="link"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="warning"
              size="sm"
              variant="link"
            />
            <Button
              content={"سلام من یک دکمه هستم"}
              color="success"
              size="sm"
              variant="link"
              icon={<HiArrowDownTray className="w-5 h-5" />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ui;
