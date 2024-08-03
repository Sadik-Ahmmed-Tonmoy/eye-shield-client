"use client";
import { FloatButton } from "antd";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-green-500  w-full">
      <div className="relative h-[400px]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
        <div className="relative h-[calc(100vh+400px)] -top-[100vh]">
          <div className="h-[400px] sticky top-[calc(100vh-400px)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus sapiente reiciendis animi voluptatibus ab pariatur iusto inventore commodi quod, cumque numquam voluptates temporibus nulla consectetur, id neque omnis provident natus? Cupiditate necessitatibus saepe aut quas alias exercitationem, eius suscipit enim aliquid fugiat at eaque est facilis perspiciatis porro autem. Quo, modi. Nisi, totam! Expedita voluptatem sit minima vero velit maiores praesentium voluptatum officiis, assumenda inventore! Aliquid alias a tempora magnam, assumenda laboriosam optio qui illum minus perspiciatis tenetur ad repudiandae officiis temporibus vel nemo fugiat voluptas quam unde. Nostrum dolore doloremque quos eligendi saepe expedita aperiam hic! Magni, illum quam quae obcaecati corrupti ab quibusdam corporis! Obcaecati necessitatibus numquam, maiores quisquam ad qui porro blanditiis neque, dolorem veniam, a quod perferendis aliquam consequatur? Optio eius id error reiciendis aspernatur sequi recusandae nam amet deserunt minus soluta alias dolores, consequuntur repudiandae quod quaerat! Aliquid impedit necessitatibus rerum maiores? Obcaecati ipsam laudantium cumque iusto, blanditiis placeat nemo? Autem voluptates, magni totam distinctio vero, dolorem non quibusdam aliquid facere porro similique odio enim cum fugit quis quo vitae cumque mollitia repellat blanditiis ab optio. Deserunt neque numquam consequatur quidem et cumque voluptates possimus, reiciendis alias ipsa, qui quae. Odio ex quia tempore.
          </div>
        </div>
      </div>

      <FloatButton.BackTop />
    </div>
  );
};

export default Footer;
