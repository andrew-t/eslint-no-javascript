export const rule = {
    meta: {
        name: "eslint-no-javascript",
        version: "1.0.0",
        type: "problem",
        docs: {
            description: "Enforce that developers should not use JavaScript."
        },
        fixable: "code",
        schema: []
    },
    create(context) {
        return {
            Program(node) {
                if (node.body.length === 0) return null;
                context.report({
                    node,
                    message: 'Unexpected JavaScript.',
                    data: {
                        javascript: node.toString()
                    },
                    *fix(fixer) {
                        for (const child of node.body)
                            yield fixer.remove(child);
                    }
                });
            }
        };
    }
};

export default { rules: { "no-javascript": rule } };
