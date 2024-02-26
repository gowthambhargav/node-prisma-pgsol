import prisma from "../db/db";

export const getUserProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      prodects: true,
    },
  });
  res.json({ data: user.prodects });
};

export const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(401);
    res.json({ msg: "id is required" });
  }
  const product = await prisma.prodect.findFirst({
    where: {
      id,
      belongsToId: req.user.id,
    },
  });
  res.json({ data: product });
};

export const createProduct = async (req, res, next) => {
  try {
    const product = await prisma.prodect.create({
      data: {
        name: req.body.name,
        belongsToId: req.user.id,
      },
    });
    res.json({ data: product });
  } catch (error) {
    next(error);
  }
};

export const UpdateProduct = async (req, res) => {
  const updated = await prisma.prodect.update({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    },
    data: {
      name: req.body.name,
    },
  });
  res.json({ data: updated });
};

export const DeleteProduct = async (req, res) => {
  const deleted = await prisma.prodect.delete({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    },
  });
  res.json({ data: deleted });
};
