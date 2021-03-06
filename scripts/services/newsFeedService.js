/* global socialNetwork, sessionStorage */

socialNetwork.factory('newsFeedService', function ($http, $q, BASE_URL) {
    var feedService = {};

    feedService.getNewsFeed = function (StartPostId) {
        var deferred = $q.defer();
        var url = BASE_URL + 'me/feed?StartPostId&PageSize=5';
        if (StartPostId) {
            url = BASE_URL + 'me/feed?StartPostId=' + StartPostId + '&PageSize=5';
        }
        var request = {
            method: 'GET',
            url: url,
            headers: {
                Authorization: 'Bearer ' + sessionStorage.accessToken
            }
        };

        $http(request)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(data);
            });

        return deferred.promise;
    };

    feedService.likePost = function (postId) {
        var deferred = $q.defer();

        var request = {
            method: 'POST',
            url: BASE_URL + 'Posts/' + postId + '/likes',
            headers: {
                Authorization: 'Bearer ' + sessionStorage.accessToken
            }
        };

        $http(request)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(data);
            });

        return deferred.promise;
    };

    feedService.unlikePost = function (postId) {
        var deferred = $q.defer();

        var request = {
            method: 'DELETE',
            url: BASE_URL + 'Posts/' + postId + '/likes',
            headers: {
                Authorization: 'Bearer ' + sessionStorage.accessToken
            }
        };

        $http(request)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(data);
            });

        return deferred.promise;
    };

    feedService.likeComment = function (postId, commentId) {
        var deferred = $q.defer();

        var request = {
            method: 'POST',
            url: BASE_URL + 'posts/' + postId + '/comments/' + commentId + '/likes',
            headers: {
                Authorization: 'Bearer ' + sessionStorage.accessToken
            }
        };

        $http(request)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(data);
            });

        return deferred.promise;
    };

    feedService.unlikeComment = function (postId, commentId) {
        var deferred = $q.defer();

        var request = {
            method: 'DELETE',
            url: BASE_URL + 'posts/' + postId + '/comments/' + commentId + '/likes',
            headers: {
                Authorization: 'Bearer ' + sessionStorage.accessToken
            }
        };

        $http(request)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(data);
            });

        return deferred.promise;
    };

    feedService.postComment = function (postId, commentContent) {
        var deferred = $q.defer();

        var request = {
            method: 'POST',
            url: BASE_URL + 'posts/' + postId + '/comments',
            headers: {
                Authorization: 'Bearer ' + sessionStorage.accessToken
            },
            data: {
                commentContent: commentContent
            }
        };

        $http(request)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(data);
            });

        return deferred.promise;
    };

    feedService.getPostComments = function (postId) {
        var deferred = $q.defer();

        var request = {
            method: 'GET',
            url: BASE_URL + 'posts/' + postId + '/comments',
            headers: {
                Authorization: 'Bearer ' + sessionStorage.accessToken
            }
        };

        $http(request)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(data);
            });

        return deferred.promise;
    };

    feedService.deletePost = function (postId) {
        var deferred = $q.defer();

        var request = {
            method: 'DELETE',
            url: BASE_URL + 'Posts/' + postId,
            headers: {
                Authorization: 'Bearer ' + sessionStorage.accessToken
            }
        };

        $http(request)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(data);
            });

        return deferred.promise;
    };

    feedService.editPost = function (postId, data) {
        var deferred = $q.defer();
        var request = {
            method: 'PUT',
            url: BASE_URL + 'Posts/' + postId,
            headers: {
                Authorization: 'Bearer ' + sessionStorage.accessToken
            },
            data: {
                postContent: data
            }
        };

        $http(request)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(data);
            });

        return deferred.promise;
    };

    feedService.deleteComment = function (postId, commentId) {
        var deferred = $q.defer();

        var request = {
            method: 'DELETE',
            url: BASE_URL + 'posts/' + postId + '/comments/' + commentId,
            headers: {
                Authorization: 'Bearer ' + sessionStorage.accessToken
            }
        };

        $http(request)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(data);
            });

        return deferred.promise;
    };

    feedService.editComment = function (postId, commentId, data) {
        var deferred = $q.defer();
        var request = {
            method: 'PUT',
            url: BASE_URL + 'Posts/' + postId + '/comments/' + commentId,
            headers: {
                Authorization: 'Bearer ' + sessionStorage.accessToken
            },
            data: {
                commentContent: data
            }
        };

        $http(request)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(data);
            });

        return deferred.promise;
    };

    return feedService;
});
