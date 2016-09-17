//TODO (INTERFACES EXERCISE)
//1. Implement the IBaseRecipeCategory interface
var BaseRecipeCategory = (function () {
    function BaseRecipeCategory() {
        this._foodGroups = [];
    }
    Object.defineProperty(BaseRecipeCategory.prototype, "name", {
        //TODO (PROPERTIES EXERCISE)
        //1.  Create get and set blocks for "name" (string type) and "foodGroups" (FoodGroup[] type) properties.
        //2. The get block should return _name while the set block should assign the value to _name.
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRecipeCategory.prototype, "foodGroups", {
        get: function () {
            return this._foodGroups;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRecipeCategory.prototype, "FoodGroup", {
        set: function (food) {
            this._foodGroups = food;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRecipeCategory;
}());
//# sourceMappingURL=baseRecipeCategory.js.map