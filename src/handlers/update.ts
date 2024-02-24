import prisma from "../db/db";

export const GetAllUpdate = async (req, res) => {
  const product = await prisma.prodect.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });
  const updates = product.reduce((allProduct, product) => {
    return [...allProduct, ...product.updates];
  }, []);
  res.json({ data: updates });
};

export const getSingleUpdate = async (req, res) => {
  const id = req.params.id;
  const singleUpdate = await prisma.update.findUnique({
    where: {
      id,
    },
  });
  res.json({ data: singleUpdate });
};

export const createUpdate = async (req, res) => {
  const { productId, title, body } = req.body;
  const product = await prisma.prodect.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    return res.json({ msg: "No" });
  }
  const update = await prisma.update.create({
    data: {
      title: title,
      body: body,
      product: { connect: { id: product.id } },
      //   productId: productId, // Add the missing 'product' property
    },
  });
  res.json({ data: update });
};

export const updateUpdate = async (req, res) => {
  const products = await prisma.prodect.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });
  const updates = products.reduce((allProduct, product) => {
    return [...allProduct, ...product.updates];
  }, []);
  const match = updates.find((update) => update.id === req.params.id);
  if (!match) {
    return res.json({ msg: "No" });
  }
  const Updatedupdate = await prisma.update.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });
  res.json({ data: Updatedupdate });
};

export const DeleteUpdate = async (req, res) => {
  const products = await prisma.prodect.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });
  const updates = products.reduce((allProduct, product) => {
    return [...allProduct, ...product.updates];
  }, []);
  const match = updates.find((update) => update.id === req.params.id);
  if (!match) {
    return res.json({ msg: "No" });
  }
  const deleted = await prisma.update.delete({
    where: {
      id: req.params.id,
    },
  });
  res.json({ data: deleted });
};
