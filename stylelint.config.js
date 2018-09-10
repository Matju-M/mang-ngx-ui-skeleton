module.exports = {
    extends: "stylelint-config-standard",
    plugins: [
        "stylelint-order"
    ],
    rules: {
        "order/order": [
            "custom-properties",
            "declarations"
        ],
        "order/properties-alphabetical-order": true,
        "selector-type-no-unknown": null,
        "at-rule-no-unknown": [
            true,
            {
                "ignoreAtRules": [
                  "extend",
                  "function",
                  "if"
                ]
            }
        ]
    }
}
