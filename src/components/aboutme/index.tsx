import React from "react";

function About() {
  const name = "Lorem, ipsum.";
  const description = "Lorem, ipsum dolor";
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quasi obcaecati ex dolore culpa id eius placeat debitis recusandae, distinctio fuga inventore soluta voluptatem odio, optio dolorem quaerat nemo. Voluptate vero aperiam eligendi sequi odio adipisci nulla. Aspernatur, libero iste ipsum doloribus tenetur eius, voluptate commodi praesentium incidunt repudiandae necessitatibus odio reprehenderit veritatis nam dicta. Quidem similique necessitatibus laudantium quaerat minus magnam sunt illum voluptatibus exercitationem fugit corrupti ipsum beatae, tempora quos quasi nam a ad dolore non? Consectetur officiis, impedit tempore explicabo adipisci quam facilis enim quibusdam ipsum voluptatem suscipit quia, sint ullam ratione sequi repellendus accusamus tenetur necessitatibus libero at! Illo officiis corporis minima vitae maiores, asperiores optio ullam, aperiam error veritatis accusantium quo velit culpa. Recusandae doloribus eius aliquid, voluptatum sint dolore, fuga non, voluptas officia laudantium cum blanditiis! Dolorem iste explicabo vel fugiat, omnis in dolor necessitatibus quia rem asperiores fugit nihil voluptatum repellat quam aliquam?";
  return (
    <div className="p-2">
      <h1 className="text xl font-semibold">Hola mundo soy {name}!</h1>

      <h2 className="">{description}</h2>
      <p className="text-justify text-md mt-4">{text}</p>
    </div>
  );
}

export default About;
