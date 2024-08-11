package com.example.backend.tedapi;

import java.util.List;

public class SearchRequest {
    private String query;
    private List<String> fields;
    private int page;
    private int limit;
    private String scope;
    private boolean checkQuerySyntax;
    private String paginationMode;
    private boolean onlyLatestVersions;
    private String iterationNextToken;

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public List<String> getFields() {
        return fields;
    }

    public void setFields(List<String> fields) {
        this.fields = fields;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    public String getScope() {
        return scope;
    }

    public void setScope(String scope) {
        this.scope = scope;
    }

    public boolean isCheckQuerySyntax() {
        return checkQuerySyntax;
    }

    public void setCheckQuerySyntax(boolean checkQuerySyntax) {
        this.checkQuerySyntax = checkQuerySyntax;
    }

    public String getPaginationMode() {
        return paginationMode;
    }

    public void setPaginationMode(String paginationMode) {
        this.paginationMode = paginationMode;
    }

    public boolean isOnlyLatestVersions() {
        return onlyLatestVersions;
    }

    public void setOnlyLatestVersions(boolean onlyLatestVersions) {
        this.onlyLatestVersions = onlyLatestVersions;
    }

    public String getIterationNextToken() {
        return iterationNextToken;
    }

    public void setIterationNextToken(String iterationNextToken) {
        this.iterationNextToken = iterationNextToken;
    }

    // Constructor(s) if needed
}