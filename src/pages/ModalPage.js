import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>
                I Accept
            </Button>
        </div>
    );
    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Here is an important agreement for you to accept</p>
        </Modal>
    );

    return (
        <div className="relative">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, quam repellendus ea inventore numquam omnis est
                beatae aut minima, nemo nihil quia! Nihil omnis corporis fugit
                quas aliquid at, quo explicabo voluptatibus inventore veniam
                laborum eveniet est vero assumenda magni reiciendis saepe
                architecto. Eveniet dolore minima ipsam quis sit omnis
                reiciendis neque. Quisquam dolor quasi consectetur aliquam,
                voluptas harum in! Facere, ipsam ratione corrupti facilis
                aliquid beatae eveniet repellendus obcaecati ipsa quibusdam
                voluptatibus minus sunt debitis, dolor harum ut modi itaque
                nesciunt quaerat iste earum distinctio. Illo facilis, iusto nemo
                sunt velit tempore dolore laborum repellat deserunt enim natus
                placeat quidem vel similique laboriosam quaerat quis doloribus!
                In sed dolorum beatae, vitae accusamus itaque odit minima
                sapiente sunt fuga perferendis, nesciunt doloribus eligendi
                eveniet laboriosam quasi molestiae nulla rerum quibusdam officia
                vel? Recusandae nemo non, veniam numquam ea, officiis hic sunt
                vero aut voluptate labore illum repudiandae quidem sed! Debitis
                voluptas aliquid repellendus ducimus eligendi fugiat sunt maxime
                doloribus modi? Soluta voluptatibus quod deleniti, alias eius ea
                velit doloremque delectus corporis possimus, magnam voluptate ad
                sequi neque esse explicabo odit iste facere dolor animi sint
                maxime aliquid magni. Amet esse soluta voluptate iste animi,
                distinctio adipisci quia ratione maxime optio?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, quam repellendus ea inventore numquam omnis est
                beatae aut minima, nemo nihil quia! Nihil omnis corporis fugit
                quas aliquid at, quo explicabo voluptatibus inventore veniam
                laborum eveniet est vero assumenda magni reiciendis saepe
                architecto. Eveniet dolore minima ipsam quis sit omnis
                reiciendis neque. Quisquam dolor quasi consectetur aliquam,
                voluptas harum in! Facere, ipsam ratione corrupti facilis
                aliquid beatae eveniet repellendus obcaecati ipsa quibusdam
                voluptatibus minus sunt debitis, dolor harum ut modi itaque
                nesciunt quaerat iste earum distinctio. Illo facilis, iusto nemo
                sunt velit tempore dolore laborum repellat deserunt enim natus
                placeat quidem vel similique laboriosam quaerat quis doloribus!
                In sed dolorum beatae, vitae accusamus itaque odit minima
                sapiente sunt fuga perferendis, nesciunt doloribus eligendi
                eveniet laboriosam quasi molestiae nulla rerum quibusdam officia
                vel? Recusandae nemo non, veniam numquam ea, officiis hic sunt
                vero aut voluptate labore illum repudiandae quidem sed! Debitis
                voluptas aliquid repellendus ducimus eligendi fugiat sunt maxime
                doloribus modi? Soluta voluptatibus quod deleniti, alias eius ea
                velit doloremque delectus corporis possimus, magnam voluptate ad
                sequi neque esse explicabo odit iste facere dolor animi sint
                maxime aliquid magni. Amet esse soluta voluptate iste animi,
                distinctio adipisci quia ratione maxime optio?
            </p>{" "}
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, quam repellendus ea inventore numquam omnis est
                beatae aut minima, nemo nihil quia! Nihil omnis corporis fugit
                quas aliquid at, quo explicabo voluptatibus inventore veniam
                laborum eveniet est vero assumenda magni reiciendis saepe
                architecto. Eveniet dolore minima ipsam quis sit omnis
                reiciendis neque. Quisquam dolor quasi consectetur aliquam,
                voluptas harum in! Facere, ipsam ratione corrupti facilis
                aliquid beatae eveniet repellendus obcaecati ipsa quibusdam
                voluptatibus minus sunt debitis, dolor harum ut modi itaque
                nesciunt quaerat iste earum distinctio. Illo facilis, iusto nemo
                sunt velit tempore dolore laborum repellat deserunt enim natus
                placeat quidem vel similique laboriosam quaerat quis doloribus!
                In sed dolorum beatae, vitae accusamus itaque odit minima
                sapiente sunt fuga perferendis, nesciunt doloribus eligendi
                eveniet laboriosam quasi molestiae nulla rerum quibusdam officia
                vel? Recusandae nemo non, veniam numquam ea, officiis hic sunt
                vero aut voluptate labore illum repudiandae quidem sed! Debitis
                voluptas aliquid repellendus ducimus eligendi fugiat sunt maxime
                doloribus modi? Soluta voluptatibus quod deleniti, alias eius ea
                velit doloremque delectus corporis possimus, magnam voluptate ad
                sequi neque esse explicabo odit iste facere dolor animi sint
                maxime aliquid magni. Amet esse soluta voluptate iste animi,
                distinctio adipisci quia ratione maxime optio?
            </p>{" "}
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, quam repellendus ea inventore numquam omnis est
                beatae aut minima, nemo nihil quia! Nihil omnis corporis fugit
                quas aliquid at, quo explicabo voluptatibus inventore veniam
                laborum eveniet est vero assumenda magni reiciendis saepe
                architecto. Eveniet dolore minima ipsam quis sit omnis
                reiciendis neque. Quisquam dolor quasi consectetur aliquam,
                voluptas harum in! Facere, ipsam ratione corrupti facilis
                aliquid beatae eveniet repellendus obcaecati ipsa quibusdam
                voluptatibus minus sunt debitis, dolor harum ut modi itaque
                nesciunt quaerat iste earum distinctio. Illo facilis, iusto nemo
                sunt velit tempore dolore laborum repellat deserunt enim natus
                placeat quidem vel similique laboriosam quaerat quis doloribus!
                In sed dolorum beatae, vitae accusamus itaque odit minima
                sapiente sunt fuga perferendis, nesciunt doloribus eligendi
                eveniet laboriosam quasi molestiae nulla rerum quibusdam officia
                vel? Recusandae nemo non, veniam numquam ea, officiis hic sunt
                vero aut voluptate labore illum repudiandae quidem sed! Debitis
                voluptas aliquid repellendus ducimus eligendi fugiat sunt maxime
                doloribus modi? Soluta voluptatibus quod deleniti, alias eius ea
                velit doloremque delectus corporis possimus, magnam voluptate ad
                sequi neque esse explicabo odit iste facere dolor animi sint
                maxime aliquid magni. Amet esse soluta voluptate iste animi,
                distinctio adipisci quia ratione maxime optio?
            </p>{" "}
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, quam repellendus ea inventore numquam omnis est
                beatae aut minima, nemo nihil quia! Nihil omnis corporis fugit
                quas aliquid at, quo explicabo voluptatibus inventore veniam
                laborum eveniet est vero assumenda magni reiciendis saepe
                architecto. Eveniet dolore minima ipsam quis sit omnis
                reiciendis neque. Quisquam dolor quasi consectetur aliquam,
                voluptas harum in! Facere, ipsam ratione corrupti facilis
                aliquid beatae eveniet repellendus obcaecati ipsa quibusdam
                voluptatibus minus sunt debitis, dolor harum ut modi itaque
                nesciunt quaerat iste earum distinctio. Illo facilis, iusto nemo
                sunt velit tempore dolore laborum repellat deserunt enim natus
                placeat quidem vel similique laboriosam quaerat quis doloribus!
                In sed dolorum beatae, vitae accusamus itaque odit minima
                sapiente sunt fuga perferendis, nesciunt doloribus eligendi
                eveniet laboriosam quasi molestiae nulla rerum quibusdam officia
                vel? Recusandae nemo non, veniam numquam ea, officiis hic sunt
                vero aut voluptate labore illum repudiandae quidem sed! Debitis
                voluptas aliquid repellendus ducimus eligendi fugiat sunt maxime
                doloribus modi? Soluta voluptatibus quod deleniti, alias eius ea
                velit doloremque delectus corporis possimus, magnam voluptate ad
                sequi neque esse explicabo odit iste facere dolor animi sint
                maxime aliquid magni. Amet esse soluta voluptate iste animi,
                distinctio adipisci quia ratione maxime optio?
            </p>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
        </div>
    );
};

export default ModalPage;
