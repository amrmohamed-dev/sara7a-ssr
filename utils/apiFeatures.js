class APIFeatures {
  constructor(mongooseQuery, query) {
    this.mongooseQuery = mongooseQuery;
    this.query = query;
  }

  search() {
    if (this.query.search) {
      const keyword = this.query.search;
      this.mongooseQuery.find({
        $or: [
          { title: { $regex: keyword, $options: 'i' } },
          { author: { $regex: keyword, $options: 'i' } },
        ],
      });
    }
    return this;
  }

  filter() {
    const queryObj = { ...this.query };
    const excludedFileds = ['page', 'limit', 'fields', 'sort'];
    excludedFileds.forEach((f) => delete queryObj[f]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(lt|lte|gt|gte|eq|ne)\b/g,
      (match) => `$${match}`,
    );
    const filter = JSON.parse(queryStr);
    this.mongooseQuery.find(filter);
    return this;
  }

  sort() {
    const sortBy = this.query.sort?.split(',').join(' ') || '-createdAt';
    this.mongooseQuery.sort(sortBy);
    return this;
  }

  projection() {
    const fields = this.query.fields?.split(',').join(' ') || '-__v';
    this.mongooseQuery.select(fields);
    return this;
  }

  paginate() {
    let page = this.query.page * 1 || 1;
    if (page < 0) page = 1;
    const limit = this.query.limit * 1 || 10;
    const skip = (page - 1) * limit;
    this.page = page;
    this.mongooseQuery.skip(skip).limit(limit);
    return this;
  }
}

export default APIFeatures;
